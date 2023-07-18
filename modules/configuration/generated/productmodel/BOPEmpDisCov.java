package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpDisCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPEmpDisCov extends entity.BusinessOwnersCov {
  protected BOPEmpDisCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPEmpDisCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPEmpDisCov");
  }
  
  public BOPEmpDisCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPEmpDisCov");
  }
  
  public productmodel.OptionBOPEmpDisLimitType getBOPEmpDisLimitTerm() {
    return (productmodel.OptionBOPEmpDisLimitType)getCovTerm("BOPEmpDisLimit");
  }
  
  public productmodel.DirectBOPEmpDisNumEmpType getBOPEmpDisNumEmpTerm() {
    return (productmodel.DirectBOPEmpDisNumEmpType)getCovTerm("BOPEmpDisNumEmp");
  }
  
  public productmodel.DirectBOPEmpDisNumLocType getBOPEmpDisNumLocTerm() {
    return (productmodel.DirectBOPEmpDisNumLocType)getCovTerm("BOPEmpDisNumLoc");
  }
  
  public boolean getHasBOPEmpDisLimitTerm() {
    return hasCovTerm("BOPEmpDisLimit");
  }
  
  public boolean getHasBOPEmpDisNumEmpTerm() {
    return hasCovTerm("BOPEmpDisNumEmp");
  }
  
  public boolean getHasBOPEmpDisNumLocTerm() {
    return hasCovTerm("BOPEmpDisNumLoc");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPEmpDisCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPEmpDisCov>() {
      public productmodel.BOPEmpDisCov newEmptyInstance() {
        return new productmodel.BOPEmpDisCov();
      }
      
      
    });
  }
}