package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecCovCost.eti;IMAccountsRecCovCost.eix;IMAccountsRecCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMAccountsRecCovCostVersionList extends entity.windowed.IMAccountsRecPartCostVersionList {
  entity.IMAccountsRecCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.IMTransaction bean);
  
  
  java.util.List<? extends entity.IMAccountsRecCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions();
  
  
  
}