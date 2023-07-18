package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCost.eti;APDRiskCost.eix;APDRiskCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskCostVersionList extends entity.windowed.APDCostVersionList {
  entity.APDRiskCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.APDTransaction bean);
  
  
  java.util.List<? extends entity.APDRiskCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDTransactionVersionList> getTransactions();
  
  
  
}