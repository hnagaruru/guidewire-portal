package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPCost.eti;CPCost.eix;CPCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPCostVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.CPTransaction bean);
  
  
  java.util.List<? extends entity.CPCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions();
  
  
  
}