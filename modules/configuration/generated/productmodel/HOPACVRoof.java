package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPACVRoof.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPACVRoof extends entity.HOPDwellingCond {
  protected HOPACVRoof()  {
    super((java.lang.Void)null);
  }
  
  public HOPACVRoof(entity.PolicyPeriod branch)  {
    super(branch, "zqmi2c4l40olsa7dnghbo59s2o9");
  }
  
  public HOPACVRoof(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zqmi2c4l40olsa7dnghbo59s2o9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPACVRoofInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPACVRoof>() {
      public productmodel.HOPACVRoof newEmptyInstance() {
        return new productmodel.HOPACVRoof();
      }
      
      
    });
  }
}