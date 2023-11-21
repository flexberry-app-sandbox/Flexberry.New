package New.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import New.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должности
 */
@Entity(name = "IISNewДолжности")
@Table(schema = "public", name = "Должности")
public class Dolzhnosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDдолжности")
    private Integer idдолжности;

    @Column(name = "Наименовани")
    private String наименовани;


    public Dolzhnosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDдолжности() {
      return idдолжности;
    }

    public void setIDдолжности(Integer idдолжности) {
      this.idдолжности = idдолжности;
    }

    public String getНаименовани() {
      return наименовани;
    }

    public void setНаименовани(String наименовани) {
      this.наименовани = наименовани;
    }


}