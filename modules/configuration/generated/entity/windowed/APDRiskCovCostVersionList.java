package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCovCost.eti;APDRiskCovCost.eix;APDRiskCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskCovCostVersionList extends entity.windowed.APDCostVersionList {
  entity.APDRiskCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.APDTransaction bean);
  
  
  java.util.List<? extends entity.APDRiskCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDTransactionVersionList> getTransactions();
  
  
  
}