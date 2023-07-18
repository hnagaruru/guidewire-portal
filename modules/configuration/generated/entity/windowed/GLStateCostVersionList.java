package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLStateCost.eti;GLStateCost.eix;GLStateCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLStateCostVersionList extends entity.windowed.GLCostVersionList {
  entity.GLStateCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GLTransaction bean);
  
  
  java.util.List<? extends entity.GLStateCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions();
  
  
  
}