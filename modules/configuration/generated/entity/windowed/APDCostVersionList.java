package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCost.eti;APDCost.eix;APDCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.APDTransaction bean);
  
  
  java.util.List<? extends entity.APDCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDTransactionVersionList> getTransactions();
  
  
  
}