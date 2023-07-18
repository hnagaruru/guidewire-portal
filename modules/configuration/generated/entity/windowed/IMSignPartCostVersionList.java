package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignPartCost.eti;IMSignPartCost.eix;IMSignPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMSignPartCostVersionList extends entity.windowed.IMTaxableCostVersionList {
  entity.IMSignPartCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.IMTransaction bean);
  
  
  java.util.List<? extends entity.IMSignPartCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions();
  
  
  
}