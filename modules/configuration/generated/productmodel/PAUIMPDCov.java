package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUIMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAUIMPDCov extends entity.PersonalAutoCov {
  protected PAUIMPDCov()  {
    super((java.lang.Void)null);
  }
  
  public PAUIMPDCov(entity.PolicyPeriod branch)  {
    super(branch, "PAUIMPDCov");
  }
  
  public PAUIMPDCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAUIMPDCov");
  }
  
  public boolean getHasPAUIMPDlimitTerm() {
    return hasCovTerm("PAUIMPDlimit");
  }
  
  public boolean getHasPAUIMPDstackTerm() {
    return hasCovTerm("PAUIMPDstack");
  }
  
  public productmodel.OptionPAUIMPDlimitType getPAUIMPDlimitTerm() {
    return (productmodel.OptionPAUIMPDlimitType)getCovTerm("PAUIMPDlimit");
  }
  
  public productmodel.GenericPAUIMPDstackType getPAUIMPDstackTerm() {
    return (productmodel.GenericPAUIMPDstackType)getCovTerm("PAUIMPDstack");
  }
  
  static {
    com.guidewire._generated.productmodel.PAUIMPDCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAUIMPDCov>() {
      public productmodel.PAUIMPDCov newEmptyInstance() {
        return new productmodel.PAUIMPDCov();
      }
      
      
    });
  }
}