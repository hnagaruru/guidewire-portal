package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAGeneralPremium.eti;PAGeneralPremium.eix;PAGeneralPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAGeneralPremiumVersionList extends entity.windowed.PATaxableVersionList {
  entity.PAGeneralPremium AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.PATransaction bean);
  
  
  java.util.List<? extends entity.PAGeneralPremium> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions();
  
  
  
}