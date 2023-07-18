package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPMinPremiumCost.eti;BOPMinPremiumCost.eix;BOPMinPremiumCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPMinPremiumCostVersionList extends entity.windowed.BOPTaxableVersionList {
  entity.BOPMinPremiumCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BOPTransaction bean);
  
  
  java.util.List<? extends entity.BOPMinPremiumCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions();
  
  
  
}