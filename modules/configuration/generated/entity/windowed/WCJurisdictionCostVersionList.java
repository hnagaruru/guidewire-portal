package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdictionCost.eti;WCJurisdictionCost.eix;WCJurisdictionCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCJurisdictionCostVersionList extends entity.windowed.WCCostVersionList {
  entity.WCJurisdictionCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.WCTransaction bean);
  
  
  java.util.List<? extends entity.WCJurisdictionCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCTransactionVersionList> getTransactions();
  
  
  
}