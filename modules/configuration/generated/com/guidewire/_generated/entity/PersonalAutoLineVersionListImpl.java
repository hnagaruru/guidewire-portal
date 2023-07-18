package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoLine.eti;PersonalAutoLine.eix;PersonalAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoLineVersionList {
  public PersonalAutoLineVersionListImpl(entity.PersonalAutoLine base)  {
    super(base);
  }
  
  public PersonalAutoLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.PersonalAutoLine AsOf(java.util.Date date) {
    return (entity.PersonalAutoLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PACost> PACostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.PACOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCond> PALineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.PALINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCov> PALineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.PALINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoExcl> PALineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.PALINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAModifier> PAModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.PAMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyDriverMVR> PolicyDriverMVRsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.POLICYDRIVERMVRS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyDriver> PolicyDriversAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.POLICYDRIVERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalVehicle> VehiclesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoLine.VEHICLES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.PersonalAutoLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.PersonalAutoLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.PersonalAutoLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.PersonalAutoLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPACosts(entity.PACost bean) {
    addToArray(entity.PersonalAutoLine.PACOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPALineConditions(entity.PersonalAutoCond bean) {
    addToArray(entity.PersonalAutoLine.PALINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPALineCoverages(entity.PersonalAutoCov bean) {
    addToArray(entity.PersonalAutoLine.PALINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPALineExclusions(entity.PersonalAutoExcl bean) {
    addToArray(entity.PersonalAutoLine.PALINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPAModifiers(entity.PAModifier bean) {
    addToArray(entity.PersonalAutoLine.PAMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyDriverMVRs(entity.PolicyDriverMVR bean) {
    addToArray(entity.PersonalAutoLine.POLICYDRIVERMVRS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyDrivers(entity.PolicyDriver bean) {
    addToArray(entity.PersonalAutoLine.POLICYDRIVERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToVehicles(entity.PersonalVehicle bean) {
    addToArray(entity.PersonalAutoLine.VEHICLES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.PersonalAutoLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.PersonalAutoLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.PersonalAutoLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.PersonalAutoLine.LINEANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PACostVersionList> getPACosts() {
    return (java.util.List)getArray(entity.PersonalAutoLine.PACOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalAutoCondVersionList> getPALineConditions() {
    return (java.util.List)getArray(entity.PersonalAutoLine.PALINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalAutoCovVersionList> getPALineCoverages() {
    return (java.util.List)getArray(entity.PersonalAutoLine.PALINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalAutoExclVersionList> getPALineExclusions() {
    return (java.util.List)getArray(entity.PersonalAutoLine.PALINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PAModifierVersionList> getPAModifiers() {
    return (java.util.List)getArray(entity.PersonalAutoLine.PAMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyDriverMVRVersionList> getPolicyDriverMVRs() {
    return (java.util.List)getArray(entity.PersonalAutoLine.POLICYDRIVERMVRS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyDriverVersionList> getPolicyDrivers() {
    return (java.util.List)getArray(entity.PersonalAutoLine.POLICYDRIVERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalVehicleVersionList> getVehicles() {
    return (java.util.List)getArray(entity.PersonalAutoLine.VEHICLES_PROP.get());
  }
  
  
}