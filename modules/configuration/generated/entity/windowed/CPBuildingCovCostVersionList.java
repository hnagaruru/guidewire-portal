package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovCost.eti;CPBuildingCovCost.eix;CPBuildingCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBuildingCovCostVersionList extends entity.windowed.CPCostVersionList {
  entity.CPBuildingCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.CPTransaction bean);
  
  
  java.util.List<? extends entity.CPBuildingCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions();
  
  
  
}