package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineCovCost.eti;GLLineCovCost.eix;GLLineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLLineCovCostVersionList extends entity.windowed.GLCovCostVersionList {
  entity.GLLineCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GLTransaction bean);
  
  
  java.util.List<? extends entity.GLLineCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions();
  
  
  
}