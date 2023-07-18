package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InlandMarineLine.eti;InlandMarineLine.eix;InlandMarineLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class InlandMarineLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.InlandMarineLineVersionList {
  public InlandMarineLineVersionListImpl(entity.InlandMarineLine base)  {
    super(base);
  }
  
  public InlandMarineLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.InlandMarineLine AsOf(java.util.Date date) {
    return (entity.InlandMarineLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMCost> IMCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.IMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMCoveragePart> IMCoveragePartsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.IMCOVERAGEPARTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMLocation> IMLocationsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.IMLOCATIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.InlandMarineLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.InlandMarineLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.InlandMarineLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.InlandMarineLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMCosts(entity.IMCost bean) {
    addToArray(entity.InlandMarineLine.IMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMCoverageParts(entity.IMCoveragePart bean) {
    addToArray(entity.InlandMarineLine.IMCOVERAGEPARTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMLocations(entity.IMLocation bean) {
    addToArray(entity.InlandMarineLine.IMLOCATIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.InlandMarineLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.InlandMarineLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.InlandMarineLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.InlandMarineLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.InlandMarineLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMCostVersionList> getIMCosts() {
    return (java.util.List)getArray(entity.InlandMarineLine.IMCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMCoveragePartVersionList> getIMCoverageParts() {
    return (java.util.List)getArray(entity.InlandMarineLine.IMCOVERAGEPARTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMLocationVersionList> getIMLocations() {
    return (java.util.List)getArray(entity.InlandMarineLine.IMLOCATIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.InlandMarineLine.LINEANSWERS_PROP.get());
  }
  
  
}