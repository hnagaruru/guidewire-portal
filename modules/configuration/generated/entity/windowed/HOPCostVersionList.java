package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCost.eti;HOPCost.eix;HOPCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.HOPTransaction bean);
  
  
  java.util.List<? extends entity.HOPCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions();
  
  
  
}