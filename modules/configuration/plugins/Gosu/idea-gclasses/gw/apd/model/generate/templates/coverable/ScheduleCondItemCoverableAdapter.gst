<%@ params( coverable : APDCoverable ) %>
<%
uses gw.apd.APDConstants
uses gw.apd.model.generate.APDGosuReferencesHelper

var basePackage = "${APDConstants.GW_LOB}.${coverable.LinePrefixLowerCase}"
%>
package ${basePackage}

uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration

@Export
class ${coverable.QualifiedName}ScheduleCondItemCoverableAdapterBase extends AbstractScheduledItemAdapter {
  var _owner : ${coverable.QualifiedName}ScheduleCondItem as readonly Owner

  construct(item : entity.${coverable.QualifiedName}ScheduleCondItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.Schedule
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.Schedule.${coverable.TypeName}${APDGosuReferencesHelper.getReferenceToLine(coverable)}
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return hasClause() ? {_owner.ScheduledItemClause} : {}
  }

  override function addCondition(cond : PolicyCondition) {
    _owner.ScheduledItemClause = cond as entity.${coverable.QualifiedName}SchCondItemCond
  }

  override function removeCondition(cond : PolicyCondition) {
    if (hasClause()) {
      Clause.remove()
    }
  }

  override property get Clause() : Clause {
    return _owner.ScheduledItemClause
  }

  override function hasClause() : boolean {
    return (Clause != null)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Schedule.${coverable.TypeName}.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_${coverable.LinePrefix}).AllowedCurrencies
  }

  override function hasClause(pattern : ClausePattern) : boolean {
    return (getClause(pattern) != null)
  }

  override property get Clauses() : Clause[] {
    return hasClause() ? {Clause} : {}
  }

  override function getClause(pattern : ClausePattern) : Clause {
    return Clauses.firstWhere( \ clause -> clause.Pattern == pattern)
  }

  override property get AssociatedCoveragePartTypes() : CoveragePartType[] {
    return _owner.Schedule.OwningCoverable.AssociatedCoveragePartTypes
  }

}