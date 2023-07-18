package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingNonPerilCovCost.eti;HOPDwellingNonPerilCovCost.eix;HOPDwellingNonPerilCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingNonPerilCovCostVersionList extends entity.windowed.HOPDwellingCovCostVersionList {
  entity.HOPDwellingNonPerilCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.HOPTransaction bean);
  
  
  java.util.List<? extends entity.HOPDwellingNonPerilCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions();
  
  
  
}