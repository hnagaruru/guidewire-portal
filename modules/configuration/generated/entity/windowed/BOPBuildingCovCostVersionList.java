package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuildingCovCost.eti;BOPBuildingCovCost.eix;BOPBuildingCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPBuildingCovCostVersionList extends entity.windowed.BOPCoveragePremiumVersionList {
  entity.BOPBuildingCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BOPTransaction bean);
  
  
  java.util.List<? extends entity.BOPBuildingCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions();
  
  
  
}