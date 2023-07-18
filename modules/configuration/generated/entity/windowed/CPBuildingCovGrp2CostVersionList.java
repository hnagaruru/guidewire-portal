package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCovGrp2Cost.eti;CPBuildingCovGrp2Cost.eix;CPBuildingCovGrp2Cost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBuildingCovGrp2CostVersionList extends entity.windowed.CPBuildingCovCostVersionList {
  entity.CPBuildingCovGrp2Cost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.CPTransaction bean);
  
  
  java.util.List<? extends entity.CPBuildingCovGrp2Cost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions();
  
  
  
}