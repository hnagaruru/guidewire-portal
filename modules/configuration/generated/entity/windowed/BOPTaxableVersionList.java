package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPTaxable.eti;BOPTaxable.eix;BOPTaxable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPTaxableVersionList extends entity.windowed.BOPCostVersionList {
  entity.BOPTaxable AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BOPTransaction bean);
  
  
  java.util.List<? extends entity.BOPTaxable> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions();
  
  
  
}