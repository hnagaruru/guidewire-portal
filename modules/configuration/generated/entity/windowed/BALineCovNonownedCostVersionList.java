package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BALineCovNonownedCost.eti;BALineCovNonownedCost.eix;BALineCovNonownedCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BALineCovNonownedCostVersionList extends entity.windowed.BALineCovCostVersionList {
  entity.BALineCovNonownedCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BATransaction bean);
  
  
  java.util.List<? extends entity.BALineCovNonownedCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions();
  
  
  
}