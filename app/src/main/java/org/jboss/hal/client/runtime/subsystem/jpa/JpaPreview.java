/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.runtime.subsystem.jpa;

import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.shared.proxy.PlaceRequest;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.hal.ballroom.EmptyState;
import org.jboss.hal.ballroom.metric.Utilization;
import org.jboss.hal.config.Environment;
import org.jboss.hal.core.finder.FinderPath;
import org.jboss.hal.core.finder.FinderPathFactory;
import org.jboss.hal.core.finder.PreviewContent;
import org.jboss.hal.core.mvp.Places;
import org.jboss.hal.dmr.Operation;
import org.jboss.hal.dmr.ResourceAddress;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.meta.token.NameTokens;
import org.jboss.hal.resources.Resources;

import static org.jboss.gwt.elemento.core.Elements.h;
import static org.jboss.hal.dmr.ModelDescriptionConstants.INCLUDE_RUNTIME;
import static org.jboss.hal.dmr.ModelDescriptionConstants.READ_RESOURCE_OPERATION;
import static org.jboss.hal.dmr.ModelDescriptionConstants.RECURSIVE;
import static org.jboss.hal.resources.CSS.fontAwesome;

/**
 * @author Harald Pehl
 */
class JpaPreview extends PreviewContent<JpaStatistic> {

    private final Dispatcher dispatcher;
    private final ResourceAddress address;
    private final EmptyState noStatistics;
    private final HTMLElement refresh;
    private final HTMLElement header;
    private final Utilization openedSessions;
    private final Utilization closedSessions;

    @SuppressWarnings("HardCodedStringLiteral")
    JpaPreview(final JpaStatistic jpaStatistic, final Environment environment, final Dispatcher dispatcher,
            final FinderPathFactory finderPathFactory, final PlaceManager placeManager, final Places places,
            final Resources resources) {

        super(jpaStatistic.getName(), jpaStatistic.getDeployment());
        this.dispatcher = dispatcher;
        this.address = jpaStatistic.getAddress();

        FinderPath path = finderPathFactory.deployment(jpaStatistic.getDeployment());
        PlaceRequest placeRequest = places.finderPlace(NameTokens.DEPLOYMENTS, path).build();

        noStatistics = new EmptyState.Builder(resources.constants().statisticsDisabledHeader())
                .description(resources.messages()
                        .jpaStatisticsDisabled(jpaStatistic.getName(), jpaStatistic.getDeployment()))
                .icon(fontAwesome("line-chart"))
                .primaryAction(resources.constants().gotoDeployment(), () -> placeManager.revealPlace(placeRequest))
                .build();

        refresh = refreshLink(() -> update(null));

        openedSessions = new Utilization(resources.constants().opened(), resources.constants().sessions(),
                environment.isStandalone(), false);
        closedSessions = new Utilization(resources.constants().closed(), resources.constants().sessions(),
                environment.isStandalone(), false);

        previewBuilder()
                .withLast(element -> element.appendChild(refresh))
                .add(noStatistics)
                .add(header = h(2).textContent(resources.constants().sessions()).asElement())
                .add(openedSessions)
                .add(closedSessions);

        Elements.setVisible(noStatistics.asElement(), false);
    }

    @Override
    public void update(final JpaStatistic item) {
        if (item == null) {
            Operation operation = new Operation.Builder(address, READ_RESOURCE_OPERATION)
                    .param(INCLUDE_RUNTIME, true)
                    .param(RECURSIVE, true)
                    .build();
            dispatcher.execute(operation, result -> internalUpdate(new JpaStatistic(address, result)));

        } else {
            internalUpdate(item);
        }
    }

    @SuppressWarnings("HardCodedStringLiteral")
    private void internalUpdate(final JpaStatistic statistic) {
        boolean statisticsEnabled = statistic.isStatisticsEnabled();

        Elements.setVisible(noStatistics.asElement(), !statisticsEnabled);
        Elements.setVisible(refresh, statisticsEnabled);
        Elements.setVisible(header, statisticsEnabled);
        Elements.setVisible(openedSessions.asElement(), statisticsEnabled);
        Elements.setVisible(closedSessions.asElement(), statisticsEnabled);

        if (statisticsEnabled) {
            long sessions = statistic.get("connect-count").asLong();
            long opened = statistic.get("session-open-count").asLong();
            long closed = statistic.get("session-close-count").asLong();
            openedSessions.update(opened, sessions);
            closedSessions.update(closed, sessions);
        }
    }
}
