package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyLine.eti;CommercialPropertyLine.eix;CommercialPropertyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CommercialPropertyLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CommercialPropertyLineVersionList {
  public CommercialPropertyLineVersionListImpl(entity.CommercialPropertyLine base)  {
    super(base);
  }
  
  public CommercialPropertyLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddlInsured> AdditionalInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.ADDITIONALINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.CommercialPropertyLine AsOf(java.util.Date date) {
    return (entity.CommercialPropertyLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBlanket> CPBlanketsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPBLANKETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPCost> CPCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyCond> CPLineConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPLINECONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyCov> CPLineCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPLINECOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyExcl> CPLineExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPLINEEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPLocation> CPLocationsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPLOCATIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPModifier> CPModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.CPMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> CoverageSymbolGroupsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.COVERAGESYMBOLGROUPS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DiagnosticRatingWorksheet> DiagnosticRatingWorksheetsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> LineAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CommercialPropertyLine.LINEANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInsureds(entity.PolicyAddlInsured bean) {
    addToArray(entity.CommercialPropertyLine.ADDITIONALINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPBlankets(entity.CPBlanket bean) {
    addToArray(entity.CommercialPropertyLine.CPBLANKETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPCosts(entity.CPCost bean) {
    addToArray(entity.CommercialPropertyLine.CPCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPLineConditions(entity.CommercialPropertyCond bean) {
    addToArray(entity.CommercialPropertyLine.CPLINECONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPLineCoverages(entity.CommercialPropertyCov bean) {
    addToArray(entity.CommercialPropertyLine.CPLINECOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPLineExclusions(entity.CommercialPropertyExcl bean) {
    addToArray(entity.CommercialPropertyLine.CPLINEEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPLocations(entity.CPLocation bean) {
    addToArray(entity.CommercialPropertyLine.CPLOCATIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPModifiers(entity.CPModifier bean) {
    addToArray(entity.CommercialPropertyLine.CPMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup bean) {
    addToArray(entity.CommercialPropertyLine.COVERAGESYMBOLGROUPS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet bean) {
    addToArray(entity.CommercialPropertyLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineAnswers(entity.PolicyLineAnswer bean) {
    addToArray(entity.CommercialPropertyLine.LINEANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyAddlInsuredVersionList> getAdditionalInsureds() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.ADDITIONALINSUREDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBlanketVersionList> getCPBlankets() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPBLANKETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPCostVersionList> getCPCosts() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CommercialPropertyCondVersionList> getCPLineConditions() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPLINECONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CommercialPropertyCovVersionList> getCPLineCoverages() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPLINECOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CommercialPropertyExclVersionList> getCPLineExclusions() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPLINEEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPLocationVersionList> getCPLocations() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPLOCATIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPModifierVersionList> getCPModifiers() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.CPMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolGroupVersionList> getCoverageSymbolGroups() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DiagnosticRatingWorksheetVersionList> getDiagnosticRatingWorksheets() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.DIAGNOSTICRATINGWORKSHEETS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineAnswerVersionList> getLineAnswers() {
    return (java.util.List)getArray(entity.CommercialPropertyLine.LINEANSWERS_PROP.get());
  }
  
  
}