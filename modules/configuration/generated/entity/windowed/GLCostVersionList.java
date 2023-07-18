package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCost.eti;GLCost.eix;GLCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GLTransaction bean);
  
  
  java.util.List<? extends entity.GLCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions();
  
  
  
}