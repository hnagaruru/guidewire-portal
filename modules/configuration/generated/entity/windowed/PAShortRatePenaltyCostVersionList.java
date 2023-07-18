package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAShortRatePenaltyCost.eti;PAShortRatePenaltyCost.eix;PAShortRatePenaltyCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAShortRatePenaltyCostVersionList extends entity.windowed.PATaxableVersionList {
  entity.PAShortRatePenaltyCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.PATransaction bean);
  
  
  java.util.List<? extends entity.PAShortRatePenaltyCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions();
  
  
  
}