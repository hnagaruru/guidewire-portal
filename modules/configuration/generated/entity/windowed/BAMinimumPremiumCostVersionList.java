package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAMinimumPremiumCost.eti;BAMinimumPremiumCost.eix;BAMinimumPremiumCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAMinimumPremiumCostVersionList extends entity.windowed.BACostVersionList {
  entity.BAMinimumPremiumCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BATransaction bean);
  
  
  java.util.List<? extends entity.BAMinimumPremiumCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions();
  
  
  
}