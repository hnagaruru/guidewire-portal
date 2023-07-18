package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOutdoorProp.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPOutdoorProp extends entity.BOPLocationCov {
  protected BOPOutdoorProp()  {
    super((java.lang.Void)null);
  }
  
  public BOPOutdoorProp(entity.PolicyPeriod branch)  {
    super(branch, "BOPOutdoorProp");
  }
  
  public BOPOutdoorProp(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPOutdoorProp");
  }
  
  public productmodel.PackageBOPOutdoorPropLimType getBOPOutdoorPropLimTerm() {
    return (productmodel.PackageBOPOutdoorPropLimType)getCovTerm("BOPOutdoorPropLim");
  }
  
  public boolean getHasBOPOutdoorPropLimTerm() {
    return hasCovTerm("BOPOutdoorPropLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPOutdoorPropInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPOutdoorProp>() {
      public productmodel.BOPOutdoorProp newEmptyInstance() {
        return new productmodel.BOPOutdoorProp();
      }
      
      
    });
  }
}