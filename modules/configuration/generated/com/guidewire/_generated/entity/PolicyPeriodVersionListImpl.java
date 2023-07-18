package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriod.eti;PolicyPeriod.eix;PolicyPeriod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyPeriodVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyPeriodVersionList {
  public PolicyPeriodVersionListImpl(entity.PolicyPeriod base)  {
    super(base);
  }
  
  public PolicyPeriodVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDTransaction> APDTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.APDTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.PolicyPeriod AsOf(java.util.Date date) {
    return (entity.PolicyPeriod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> BATransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.BATRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> BOPTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.BOPTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> CPTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.CPTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.EffectiveDatedFields> EffectiveDatedFieldsArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.EFFECTIVEDATEDFIELDSARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Form> FormsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.FORMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLTransaction> GLTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.GLTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> HOPTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.HOPTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> IMTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.IMTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLine> LinesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.LINES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationRisk> LocationRisksAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.LOCATIONRISKS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> PATransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.PATRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PeriodAnswer> PeriodAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.PERIODANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyContactRole> PolicyContactRolesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.POLICYCONTACTROLES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLocation> PolicyLocationsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.POLICYLOCATIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyRisk> PolicyRisksAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.POLICYRISKS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.UWIssue> UWIssuesIncludingSoftDeletedAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.UWISSUESINCLUDINGSOFTDELETED_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCTransaction> WCTransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPeriod.WCTRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAPDTransactions(entity.APDTransaction bean) {
    addToArray(entity.PolicyPeriod.APDTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBATransactions(entity.BATransaction bean) {
    addToArray(entity.PolicyPeriod.BATRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBOPTransactions(entity.BOPTransaction bean) {
    addToArray(entity.PolicyPeriod.BOPTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCPTransactions(entity.CPTransaction bean) {
    addToArray(entity.PolicyPeriod.CPTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToEffectiveDatedFieldsArray(entity.EffectiveDatedFields bean) {
    addToArray(entity.PolicyPeriod.EFFECTIVEDATEDFIELDSARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToForms(entity.Form bean) {
    addToArray(entity.PolicyPeriod.FORMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLTransactions(entity.GLTransaction bean) {
    addToArray(entity.PolicyPeriod.GLTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPTransactions(entity.HOPTransaction bean) {
    addToArray(entity.PolicyPeriod.HOPTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMTransactions(entity.IMTransaction bean) {
    addToArray(entity.PolicyPeriod.IMTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLines(entity.PolicyLine bean) {
    addToArray(entity.PolicyPeriod.LINES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocationRisks(entity.LocationRisk bean) {
    addToArray(entity.PolicyPeriod.LOCATIONRISKS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPATransactions(entity.PATransaction bean) {
    addToArray(entity.PolicyPeriod.PATRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPeriodAnswers(entity.PeriodAnswer bean) {
    addToArray(entity.PolicyPeriod.PERIODANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyContactRoles(entity.PolicyContactRole bean) {
    addToArray(entity.PolicyPeriod.POLICYCONTACTROLES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyLocations(entity.PolicyLocation bean) {
    addToArray(entity.PolicyPeriod.POLICYLOCATIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPolicyRisks(entity.PolicyRisk bean) {
    addToArray(entity.PolicyPeriod.POLICYRISKS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToUWIssuesIncludingSoftDeleted(entity.UWIssue bean) {
    addToArray(entity.PolicyPeriod.UWISSUESINCLUDINGSOFTDELETED_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToWCTransactions(entity.WCTransaction bean) {
    addToArray(entity.PolicyPeriod.WCTRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDTransactionVersionList> getAPDTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.APDTRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyPeriod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getBATransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.BATRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getBOPTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.BOPTRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPTransactionVersionList> getCPTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.CPTRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.EffectiveDatedFieldsVersionList> getEffectiveDatedFieldsArray() {
    return (java.util.List)getArray(entity.PolicyPeriod.EFFECTIVEDATEDFIELDSARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.FormVersionList> getForms() {
    return (java.util.List)getArray(entity.PolicyPeriod.FORMS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLTransactionVersionList> getGLTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.GLTRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPTransactionVersionList> getHOPTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.HOPTRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getIMTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.IMTRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLineVersionList> getLines() {
    return (java.util.List)getArray(entity.PolicyPeriod.LINES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationRiskVersionList> getLocationRisks() {
    return (java.util.List)getArray(entity.PolicyPeriod.LOCATIONRISKS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getPATransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.PATRANSACTIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PeriodAnswerVersionList> getPeriodAnswers() {
    return (java.util.List)getArray(entity.PolicyPeriod.PERIODANSWERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyContactRoleVersionList> getPolicyContactRoles() {
    return (java.util.List)getArray(entity.PolicyPeriod.POLICYCONTACTROLES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyLocationVersionList> getPolicyLocations() {
    return (java.util.List)getArray(entity.PolicyPeriod.POLICYLOCATIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyRiskVersionList> getPolicyRisks() {
    return (java.util.List)getArray(entity.PolicyPeriod.POLICYRISKS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.UWIssueVersionList> getUWIssuesIncludingSoftDeleted() {
    return (java.util.List)getArray(entity.PolicyPeriod.UWISSUESINCLUDINGSOFTDELETED_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCTransactionVersionList> getWCTransactions() {
    return (java.util.List)getArray(entity.PolicyPeriod.WCTRANSACTIONS_PROP.get());
  }
  
  
}