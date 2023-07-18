package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCovCost.eti;HOPLineCovCost.eix;HOPLineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineCovCostVersionList extends entity.windowed.HOPCostVersionList {
  entity.HOPLineCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.HOPTransaction bean);
  
  
  java.util.List<? extends entity.HOPLineCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions();
  
  
  
}