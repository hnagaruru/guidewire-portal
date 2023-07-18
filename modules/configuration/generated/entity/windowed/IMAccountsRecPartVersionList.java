package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPart.eti;IMAccountsRecPart.eix;IMAccountsRecPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsRecPartVersionList extends entity.windowed.IMCoveragePartVersionList {
  entity.IMAccountsRecPart AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartCond> IMAccountsRecPartConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartCost> IMAccountsRecPartCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartCov> IMAccountsRecPartCovsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsRecPartExcl> IMAccountsRecPartExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMAccountsReceivable> IMAccountsReceivablesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMExcludedAccount> IMExcludedAccountsAsOf(java.util.Date date);
  
  
  void addToIMAccountsRecPartConditions(entity.IMAccountsRecPartCond bean);
  
  
  void addToIMAccountsRecPartCosts(entity.IMAccountsRecPartCost bean);
  
  
  void addToIMAccountsRecPartCovs(entity.IMAccountsRecPartCov bean);
  
  
  void addToIMAccountsRecPartExclusions(entity.IMAccountsRecPartExcl bean);
  
  
  void addToIMAccountsReceivables(entity.IMAccountsReceivable bean);
  
  
  void addToIMExcludedAccounts(entity.IMExcludedAccount bean);
  
  
  java.util.List<? extends entity.IMAccountsRecPart> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecPartCondVersionList> getIMAccountsRecPartConditions();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecPartCostVersionList> getIMAccountsRecPartCosts();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecPartCovVersionList> getIMAccountsRecPartCovs();
  
  
  java.util.List<? extends entity.windowed.IMAccountsRecPartExclVersionList> getIMAccountsRecPartExclusions();
  
  
  java.util.List<? extends entity.windowed.IMAccountsReceivableVersionList> getIMAccountsReceivables();
  
  
  java.util.List<? extends entity.windowed.IMExcludedAccountVersionList> getIMExcludedAccounts();
  
  
  
}