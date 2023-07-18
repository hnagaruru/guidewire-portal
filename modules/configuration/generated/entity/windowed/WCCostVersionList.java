package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCost.eti;WCCost.eix;WCCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.WCTransaction bean);
  
  
  java.util.List<? extends entity.WCCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCTransactionVersionList> getTransactions();
  
  
  
}