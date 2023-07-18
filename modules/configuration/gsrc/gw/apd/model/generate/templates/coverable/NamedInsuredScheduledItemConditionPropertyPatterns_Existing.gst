<%
uses gw.apd.model.generate.ScheduleDataTypeHelper
uses gw.apd.model.generate.templates.TemplateComparators
uses gw.apd.model.generate.xsd.clausemodel.ConditionPattern
%>
<%@ params(schedCond : APDClause, pmCondition : ConditionPattern) %>
<%
var newProperties = new ArrayList<APDTerm>()
var usedIndexes = new ArrayList<Integer>()
%>
<%for (prop in schedCond.ScheduleItemProperties.where(\f -> f.Type == APDFieldType.TC_PARTY).sort(TemplateComparators.AttributeOrdering)) {
var currProp = pmCondition.Schedules.ClauseSchedulePattern.ScheduledItemProperties.FKScheduledItemPropertyPattern?.firstWhere(\p -> p.CodeIdentifier == prop.CodeIdentifier)
if (currProp == null) {
  newProperties.add(prop)
} else {
  var colName = ScheduleDataTypeHelper.FIELD_TYPE_SCHED_COL_NAMES.get(prop.Type)
  var colNum = currProp.Column.substring(colName.length).toInt()
  usedIndexes.add(colNum)%>
      ${NamedInsuredScheduledItemPropertyPattern.renderToString(prop, colNum)}
<%}%>
<%}%>
<% // add in any newly added properties; reuse any gaps left from deleted properties
var nextIndex = 1
for (prop in newProperties) {
  while (usedIndexes.contains(nextIndex)) {
    nextIndex++
  }
  usedIndexes.add(nextIndex)%>
      ${NamedInsuredScheduledItemPropertyPattern.renderToString(prop, nextIndex)}
<%}%>
