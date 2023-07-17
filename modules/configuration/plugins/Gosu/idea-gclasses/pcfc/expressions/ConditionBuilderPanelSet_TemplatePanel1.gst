<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final controller : gw.bizrules.pcf.ConditionBuilderController, final __helper : gw.api.web.template.TemplatePanelHelper) %>
<% function printContent(strContent : String, escape : boolean) { __helper.printContent(strContent, escape) } %>
<div style="width:800;height:500;padding:25px;">
        <% printContent(controller.prettyPrint(), false) %>
      </div>

              