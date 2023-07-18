package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPStateTaxCost.eti;CPStateTaxCost.eix;CPStateTaxCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPStateTaxCostVersionList extends entity.windowed.CPCostVersionList {
  entity.CPStateTaxCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.CPTransaction bean);
  
  
  java.util.List<? extends entity.CPStateTaxCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions();
  
  
  
}