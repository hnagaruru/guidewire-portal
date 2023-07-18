package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisdictionCost.eti;BAJurisdictionCost.eix;BAJurisdictionCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAJurisdictionCostVersionList extends entity.windowed.BACostVersionList {
  entity.BAJurisdictionCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BATransaction bean);
  
  
  java.util.List<? extends entity.BAJurisdictionCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions();
  
  
  
}