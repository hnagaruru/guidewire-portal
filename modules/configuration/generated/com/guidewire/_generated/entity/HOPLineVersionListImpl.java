package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLine.eti;HOPLine.eix;HOPLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineVersionList {
  public HOPLineVersionListImpl(entity.HOPLine base)  {
    super(base);
  }
  
  public HOPLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.HOPLine AsOf(java.util.Date date) {
    return (entity.HOPLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCost> HOPCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.HOPCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePart> HOPCoveragePartsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.HOPCOVERAGEPARTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineCond> HOPLineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.HOPLINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineCov> HOPLineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.HOPLINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineExcl> HOPLineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.HOPLINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineMod> HOPLineModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.HOPLINEMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.HOPLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.HOPLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.HOPLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPCosts(entity.HOPCost bean) {
    addToArray(entity.HOPLine.HOPCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPCoverageParts(entity.HOPCoveragePart bean) {
    addToArray(entity.HOPLine.HOPCOVERAGEPARTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPLineConditions(entity.HOPLineCond bean) {
    addToArray(entity.HOPLine.HOPLINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPLineCoverages(entity.HOPLineCov bean) {
    addToArray(entity.HOPLine.HOPLINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPLineExclusions(entity.HOPLineExcl bean) {
    addToArray(entity.HOPLine.HOPLINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPLineModifiers(entity.HOPLineMod bean) {
    addToArray(entity.HOPLine.HOPLINEMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.HOPLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.HOPLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.HOPLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.HOPLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCostVersionList> getHOPCosts() {
    return (java.util.List)getArray(entity.HOPLine.HOPCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCoveragePartVersionList> getHOPCoverageParts() {
    return (java.util.List)getArray(entity.HOPLine.HOPCOVERAGEPARTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineCondVersionList> getHOPLineConditions() {
    return (java.util.List)getArray(entity.HOPLine.HOPLINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineCovVersionList> getHOPLineCoverages() {
    return (java.util.List)getArray(entity.HOPLine.HOPLINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineExclVersionList> getHOPLineExclusions() {
    return (java.util.List)getArray(entity.HOPLine.HOPLINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineModVersionList> getHOPLineModifiers() {
    return (java.util.List)getArray(entity.HOPLine.HOPLINEMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.HOPLine.LINEANSWERS_PROP.get());
  }
  
  
}