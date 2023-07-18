package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingCovCost.eti;HOPDwellingCovCost.eix;HOPDwellingCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingCovCostVersionList extends entity.windowed.HOPCostVersionList {
  entity.HOPDwellingCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.HOPTransaction bean);
  
  
  java.util.List<? extends entity.HOPDwellingCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions();
  
  
  
}