package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAUMPDCov extends entity.PersonalAutoCov {
  protected PAUMPDCov()  {
    super((java.lang.Void)null);
  }
  
  public PAUMPDCov(entity.PolicyPeriod branch)  {
    super(branch, "PAUMPDCov");
  }
  
  public PAUMPDCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAUMPDCov");
  }
  
  public boolean getHasPAUMPDLimitTerm() {
    return hasCovTerm("PAUMPDLimit");
  }
  
  public boolean getHasPAUMPDstackedTerm() {
    return hasCovTerm("PAUMPDstacked");
  }
  
  public productmodel.OptionPAUMPDLimitType getPAUMPDLimitTerm() {
    return (productmodel.OptionPAUMPDLimitType)getCovTerm("PAUMPDLimit");
  }
  
  public productmodel.GenericPAUMPDstackedType getPAUMPDstackedTerm() {
    return (productmodel.GenericPAUMPDstackedType)getCovTerm("PAUMPDstacked");
  }
  
  static {
    com.guidewire._generated.productmodel.PAUMPDCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAUMPDCov>() {
      public productmodel.PAUMPDCov newEmptyInstance() {
        return new productmodel.PAUMPDCov();
      }
      
      
    });
  }
}