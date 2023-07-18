package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersLine.eti;BusinessOwnersLine.eix;BusinessOwnersLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessOwnersLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessOwnersLineVersionList {
  public BusinessOwnersLineVersionListImpl(entity.BusinessOwnersLine base)  {
    super(base);
  }
  
  public BusinessOwnersLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.BusinessOwnersLine AsOf(java.util.Date date) {
    return (entity.BusinessOwnersLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPCost> BOPCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessOwnersCond> BOPLineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPLINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessOwnersCov> BOPLineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPLINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessOwnersExcl> BOPLineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPLINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocation> BOPLocationsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPLOCATIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPModifier> BOPModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPScheduledEquipment> BOPScheduledEquipmentsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.BOPSCHEDULEDEQUIPMENTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessOwnersLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.BusinessOwnersLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPCosts(entity.BOPCost bean) {
    addToArray(entity.BusinessOwnersLine.BOPCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPLineConditions(entity.BusinessOwnersCond bean) {
    addToArray(entity.BusinessOwnersLine.BOPLINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPLineCoverages(entity.BusinessOwnersCov bean) {
    addToArray(entity.BusinessOwnersLine.BOPLINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPLineExclusions(entity.BusinessOwnersExcl bean) {
    addToArray(entity.BusinessOwnersLine.BOPLINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPLocations(entity.BOPLocation bean) {
    addToArray(entity.BusinessOwnersLine.BOPLOCATIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPModifiers(entity.BOPModifier bean) {
    addToArray(entity.BusinessOwnersLine.BOPMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPScheduledEquipments(entity.BOPScheduledEquipment bean) {
    addToArray(entity.BusinessOwnersLine.BOPSCHEDULEDEQUIPMENTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.BusinessOwnersLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.BusinessOwnersLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.BusinessOwnersLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessOwnersLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPCostVersionList> getBOPCosts() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessOwnersCondVersionList> getBOPLineConditions() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPLINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessOwnersCovVersionList> getBOPLineCoverages() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPLINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessOwnersExclVersionList> getBOPLineExclusions() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPLINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPLocationVersionList> getBOPLocations() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPLOCATIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPModifierVersionList> getBOPModifiers() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPScheduledEquipmentVersionList> getBOPScheduledEquipments() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.BOPSCHEDULEDEQUIPMENTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.BusinessOwnersLine.LINEANSWERS_PROP.get());
  }
  
  
}