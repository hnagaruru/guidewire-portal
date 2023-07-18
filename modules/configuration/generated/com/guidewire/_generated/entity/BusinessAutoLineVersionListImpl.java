package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoLine.eti;BusinessAutoLine.eix;BusinessAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessAutoLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessAutoLineVersionList {
  public BusinessAutoLineVersionListImpl(entity.BusinessAutoLine base)  {
    super(base);
  }
  
  public BusinessAutoLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.BusinessAutoLine AsOf(java.util.Date date) {
    return (entity.BusinessAutoLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BACost> BACostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.BACOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoCond> BALineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.BALINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoCov> BALineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.BALINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoExcl> BALineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.BALINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAModifier> BAModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.BAMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialDriver> DriversAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.DRIVERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisdiction> JurisdictionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.JURISDICTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicle> VehiclesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessAutoLine.VEHICLES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.BusinessAutoLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBACosts(entity.BACost bean) {
    addToArray(entity.BusinessAutoLine.BACOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBALineConditions(entity.BusinessAutoCond bean) {
    addToArray(entity.BusinessAutoLine.BALINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBALineCoverages(entity.BusinessAutoCov bean) {
    addToArray(entity.BusinessAutoLine.BALINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBALineExclusions(entity.BusinessAutoExcl bean) {
    addToArray(entity.BusinessAutoLine.BALINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBAModifiers(entity.BAModifier bean) {
    addToArray(entity.BusinessAutoLine.BAMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.BusinessAutoLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.BusinessAutoLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDrivers(entity.CommercialDriver bean) {
    addToArray(entity.BusinessAutoLine.DRIVERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToJurisdictions(entity.BAJurisdiction bean) {
    addToArray(entity.BusinessAutoLine.JURISDICTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.BusinessAutoLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToVehicles(entity.BusinessVehicle bean) {
    addToArray(entity.BusinessAutoLine.VEHICLES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.BusinessAutoLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessAutoLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BACostVersionList> getBACosts() {
    return (java.util.List)getArray(entity.BusinessAutoLine.BACOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessAutoCondVersionList> getBALineConditions() {
    return (java.util.List)getArray(entity.BusinessAutoLine.BALINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessAutoCovVersionList> getBALineCoverages() {
    return (java.util.List)getArray(entity.BusinessAutoLine.BALINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessAutoExclVersionList> getBALineExclusions() {
    return (java.util.List)getArray(entity.BusinessAutoLine.BALINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAModifierVersionList> getBAModifiers() {
    return (java.util.List)getArray(entity.BusinessAutoLine.BAMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.BusinessAutoLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.BusinessAutoLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CommercialDriverVersionList> getDrivers() {
    return (java.util.List)getArray(entity.BusinessAutoLine.DRIVERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAJurisdictionVersionList> getJurisdictions() {
    return (java.util.List)getArray(entity.BusinessAutoLine.JURISDICTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.BusinessAutoLine.LINEANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessVehicleVersionList> getVehicles() {
    return (java.util.List)getArray(entity.BusinessAutoLine.VEHICLES_PROP.get());
  }
  
  
}