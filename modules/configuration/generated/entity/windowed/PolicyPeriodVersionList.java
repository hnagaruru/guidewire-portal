package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriod.eti;PolicyPeriod.eix;PolicyPeriod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyPeriodVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.APDTransaction> APDTransactionsAsOf(java.util.Date date);
  
  
  entity.PolicyPeriod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> BATransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> BOPTransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> CPTransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.EffectiveDatedFields> EffectiveDatedFieldsArrayAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.Form> FormsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> GLTransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> HOPTransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> IMTransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLine> LinesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationRisk> LocationRisksAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> PATransactionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PeriodAnswer> PeriodAnswersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyContactRole> PolicyContactRolesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLocation> PolicyLocationsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyRisk> PolicyRisksAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.UWIssue> UWIssuesIncludingSoftDeletedAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCTransaction> WCTransactionsAsOf(java.util.Date date);
  
  
  void addToAPDTransactions(entity.APDTransaction bean);
  
  
  void addToBATransactions(entity.BATransaction bean);
  
  
  void addToBOPTransactions(entity.BOPTransaction bean);
  
  
  void addToCPTransactions(entity.CPTransaction bean);
  
  
  void addToEffectiveDatedFieldsArray(entity.EffectiveDatedFields bean);
  
  
  void addToForms(entity.Form bean);
  
  
  void addToGLTransactions(entity.GLTransaction bean);
  
  
  void addToHOPTransactions(entity.HOPTransaction bean);
  
  
  void addToIMTransactions(entity.IMTransaction bean);
  
  
  void addToLines(entity.PolicyLine bean);
  
  
  void addToLocationRisks(entity.LocationRisk bean);
  
  
  void addToPATransactions(entity.PATransaction bean);
  
  
  void addToPeriodAnswers(entity.PeriodAnswer bean);
  
  
  void addToPolicyContactRoles(entity.PolicyContactRole bean);
  
  
  void addToPolicyLocations(entity.PolicyLocation bean);
  
  
  void addToPolicyRisks(entity.PolicyRisk bean);
  
  
  void addToUWIssuesIncludingSoftDeleted(entity.UWIssue bean);
  
  
  void addToWCTransactions(entity.WCTransaction bean);
  
  
  java.util.List<? extends entity.windowed.APDTransactionVersionList> getAPDTransactions();
  
  
  java.util.List<? extends entity.PolicyPeriod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BATransactionVersionList> getBATransactions();
  
  
  java.util.List<? extends entity.windowed.BOPTransactionVersionList> getBOPTransactions();
  
  
  java.util.List<? extends entity.windowed.CPTransactionVersionList> getCPTransactions();
  
  
  java.util.List<? extends entity.windowed.EffectiveDatedFieldsVersionList> getEffectiveDatedFieldsArray();
  
  
  java.util.List<? extends entity.windowed.FormVersionList> getForms();
  
  
  java.util.List<? extends entity.windowed.GLTransactionVersionList> getGLTransactions();
  
  
  java.util.List<? extends entity.windowed.HOPTransactionVersionList> getHOPTransactions();
  
  
  java.util.List<? extends entity.windowed.IMTransactionVersionList> getIMTransactions();
  
  
  java.util.List<? extends entity.windowed.PolicyLineVersionList> getLines();
  
  
  java.util.List<? extends entity.windowed.LocationRiskVersionList> getLocationRisks();
  
  
  java.util.List<? extends entity.windowed.PATransactionVersionList> getPATransactions();
  
  
  java.util.List<? extends entity.windowed.PeriodAnswerVersionList> getPeriodAnswers();
  
  
  java.util.List<? extends entity.windowed.PolicyContactRoleVersionList> getPolicyContactRoles();
  
  
  java.util.List<? extends entity.windowed.PolicyLocationVersionList> getPolicyLocations();
  
  
  java.util.List<? extends entity.windowed.PolicyRiskVersionList> getPolicyRisks();
  
  
  java.util.List<? extends entity.windowed.UWIssueVersionList> getUWIssuesIncludingSoftDeleted();
  
  
  java.util.List<? extends entity.windowed.WCTransactionVersionList> getWCTransactions();
  
  
  
}