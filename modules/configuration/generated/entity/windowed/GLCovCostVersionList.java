package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCovCost.eti;GLCovCost.eix;GLCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLCovCostVersionList extends entity.windowed.GLCostVersionList {
  entity.GLCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GLTransaction bean);
  
  
  java.util.List<? extends entity.GLCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions();
  
  
  
}