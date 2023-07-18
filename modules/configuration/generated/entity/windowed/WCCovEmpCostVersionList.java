package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCovEmpCost.eti;WCCovEmpCost.eix;WCCovEmpCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCCovEmpCostVersionList extends entity.windowed.WCCostVersionList {
  entity.WCCovEmpCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.WCTransaction bean);
  
  
  java.util.List<? extends entity.WCCovEmpCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCTransactionVersionList> getTransactions();
  
  
  
}