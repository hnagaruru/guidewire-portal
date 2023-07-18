package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEqSpBldgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPEqSpBldgCov extends entity.BOPBuildingCov {
  protected BOPEqSpBldgCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPEqSpBldgCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPEqSpBldgCov");
  }
  
  public BOPEqSpBldgCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPEqSpBldgCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPEqSpBldgCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPEqSpBldgCov>() {
      public productmodel.BOPEqSpBldgCov newEmptyInstance() {
        return new productmodel.BOPEqSpBldgCov();
      }
      
      
    });
  }
}