package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPToolsInstallUnschedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPToolsInstallUnschedCov extends entity.BusinessOwnersCov {
  protected BOPToolsInstallUnschedCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPToolsInstallUnschedCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPToolsInstallUnschedCov");
  }
  
  public BOPToolsInstallUnschedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPToolsInstallUnschedCov");
  }
  
  public productmodel.PackageBOPInstallationLimType getBOPInstallationLimTerm() {
    return (productmodel.PackageBOPInstallationLimType)getCovTerm("BOPInstallationLim");
  }
  
  public productmodel.DirectBOPToolsBlanketLimType getBOPToolsBlanketLimTerm() {
    return (productmodel.DirectBOPToolsBlanketLimType)getCovTerm("BOPToolsBlanketLim");
  }
  
  public productmodel.DirectBOPToolsEmployeesType getBOPToolsEmployeesTerm() {
    return (productmodel.DirectBOPToolsEmployeesType)getCovTerm("BOPToolsEmployees");
  }
  
  public productmodel.DirectBOPToolsNonOwnedLimType getBOPToolsNonOwnedLimTerm() {
    return (productmodel.DirectBOPToolsNonOwnedLimType)getCovTerm("BOPToolsNonOwnedLim");
  }
  
  public boolean getHasBOPInstallationLimTerm() {
    return hasCovTerm("BOPInstallationLim");
  }
  
  public boolean getHasBOPToolsBlanketLimTerm() {
    return hasCovTerm("BOPToolsBlanketLim");
  }
  
  public boolean getHasBOPToolsEmployeesTerm() {
    return hasCovTerm("BOPToolsEmployees");
  }
  
  public boolean getHasBOPToolsNonOwnedLimTerm() {
    return hasCovTerm("BOPToolsNonOwnedLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPToolsInstallUnschedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPToolsInstallUnschedCov>() {
      public productmodel.BOPToolsInstallUnschedCov newEmptyInstance() {
        return new productmodel.BOPToolsInstallUnschedCov();
      }
      
      
    });
  }
}