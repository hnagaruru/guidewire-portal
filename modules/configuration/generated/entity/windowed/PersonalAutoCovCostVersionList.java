package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCovCost.eti;PersonalAutoCovCost.eix;PersonalAutoCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalAutoCovCostVersionList extends entity.windowed.PACoveragePremiumVersionList {
  entity.PersonalAutoCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.PATransaction bean);
  
  
  java.util.List<? extends entity.PersonalAutoCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions();
  
  
  
}