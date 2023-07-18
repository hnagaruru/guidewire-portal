package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovSpecCost.eti;CPBuildingCovSpecCost.eix;CPBuildingCovSpecCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBuildingCovSpecCostVersionList extends entity.windowed.CPBuildingCovCostVersionList {
  entity.CPBuildingCovSpecCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.CPTransaction bean);
  
  
  java.util.List<? extends entity.CPBuildingCovSpecCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions();
  
  
  
}