﻿(function () {
    'use strict';
    angular.module('umbraco.resources').factory('godModeResources', function ($q, $http, umbRequestHelper, godModeConfig) {
        return {
            getContentTypeMap: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetContentTypeMap")
                );
            },
            getPropertyGroups: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetPropertyGroups")
                );
            },
            getCompositions: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetCompositions")
                );
            },
            getDataTypes: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetDataTypes")
                );
            },
            getDataTypesStatus: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetDataTypesStatus")
                );
            },
            getPropertyEditors: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetPropertyEditors")
                );
            },
            getTemplates: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetTemplates")
                );
            },
            getMedia: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetMedia")
                );
            },
            getContentPaged: function (page, pageSize, criteria, orderBy) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetContentPaged",
                        {
                            params: { page: page, pageSize: pageSize, name: criteria.Name, alias: criteria.Alias, creatorId: criteria.CreatorId, id: criteria.Id, level: criteria.Level, trashed: criteria.Trashed.value, updaterId: criteria.UpdaterId, orderBy: orderBy }
                        })
                );
            },
            getMembersPaged: function (page, pageSize, groupId, search, orderBy) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetMembersPaged",
                        {
                            params: { page: page, pageSize: pageSize, groupId: groupId, search: search, orderBy: orderBy }
                        })
                );
            },
            getMemberGroups: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetMemberGroups")
                );
            },
            getContentTypeAliases: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetContentTypeAliases")
                );
            },
            getSurfaceControllers: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetSurfaceControllers")
                );
            },
            getApiControllers: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetApiControllers")
                );
            },
            getRenderMvcControllers: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetRenderMvcControllers")
                );
            },
            getPublishedContentModels: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetPublishedContentModels")
                );
            },
            getPropertyValueConveters: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetPropertyValueConverters")
                );
            },
            getEnvironmentDiagnostics: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetEnvironmentDiagnostics")
                );
            },
            getTypesAssignableFrom: function (baseType) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetTypesAssignableFrom?baseType=" + baseType)
                );
            },
            getInterfacesFrom: function (assembly) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetInterfacesFrom?assembly=" + assembly)
                );
            },
            getTypesFrom: function (assembly) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetTypesFrom?assembly=" + assembly)
                );
            },
            getTypesToBrowse: function (baseType) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetTypesToBrowse")
                );
            },
            getUmbracoAssemblies: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetUmbracoAssemblies")
                );
            },
            getAssemblies: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetAssembliesWithInterfaces")
                );
            },
            clearUmbracoCache: function (cache) {
                return umbRequestHelper.resourcePromise(
                    $http.post(godModeConfig.baseApiUrl + "ClearUmbracoCache?cache=" + cache)
                );
            },
            restartAppPool: function () {
                return umbRequestHelper.resourcePromise(
                    $http.post(godModeConfig.baseApiUrl + "RestartAppPool")
                );
            },
            getTemplateUrls: function () {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetTemplateUrlsToPing")
                );
            },
            getContentUsage: function (id, orderBy) {
                return umbRequestHelper.resourcePromise(
                    $http.get(godModeConfig.baseApiUrl + "GetContentUsageData",
                        {
                            params: { id: id, orderBy: orderBy }
                        })
                );
            },
            getTriStateOptions: function () {
                return [
                    { label: 'Any', value: null },
                    { label: 'Yes', value: true },
                    { label: 'No', value: false },
                ];
            }
        }
    });
})();