package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPToolsSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPToolsSchedCov extends entity.BusinessOwnersCov {
  protected BOPToolsSchedCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPToolsSchedCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPToolsSchedCov");
  }
  
  public BOPToolsSchedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPToolsSchedCov");
  }
  
  public productmodel.DirectBOPToolsSchedLimType getBOPToolsSchedLimTerm() {
    return (productmodel.DirectBOPToolsSchedLimType)getCovTerm("BOPToolsSchedLim");
  }
  
  public boolean getHasBOPToolsSchedLimTerm() {
    return hasCovTerm("BOPToolsSchedLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPToolsSchedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPToolsSchedCov>() {
      public productmodel.BOPToolsSchedCov newEmptyInstance() {
        return new productmodel.BOPToolsSchedCov();
      }
      
      
    });
  }
}